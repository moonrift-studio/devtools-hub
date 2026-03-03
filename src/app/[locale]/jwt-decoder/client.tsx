"use client";

import { useState, useEffect } from "react";
import CopyButton from "@/components/CopyButton";
import { useDictionary } from "@/i18n/DictionaryProvider";

interface DecodedJwt {
  header: Record<string, unknown>;
  payload: Record<string, unknown>;
  signature: string;
}

function decodeJwt(token: string): DecodedJwt {
  const parts = token.split(".");
  if (parts.length !== 3) throw new Error("Invalid JWT format");
  const header = JSON.parse(
    atob(parts[0].replace(/-/g, "+").replace(/_/g, "/"))
  );
  const payload = JSON.parse(
    atob(parts[1].replace(/-/g, "+").replace(/_/g, "/"))
  );
  return { header, payload, signature: parts[2] };
}

function formatTimestamp(value: number): string {
  try {
    return new Date(value * 1000).toLocaleString();
  } catch {
    return String(value);
  }
}

function isExpired(exp: number): boolean {
  return Date.now() > exp * 1000;
}

export default function JwtDecoderClient() {
  const dict = useDictionary();
  const [token, setToken] = useState("");
  const [decoded, setDecoded] = useState<DecodedJwt | null>(null);
  const [error, setError] = useState("");

  const STANDARD_CLAIMS: Record<string, string> = {
    iss: dict.common.issuer,
    sub: dict.common.subject,
    aud: dict.common.audience,
    exp: dict.common.expires,
    nbf: dict.common.notBefore,
    iat: dict.common.issued,
    jti: dict.common.jwtId,
  };

  useEffect(() => {
    if (!token.trim()) {
      setDecoded(null);
      setError("");
      return;
    }

    try {
      const result = decodeJwt(token.trim());
      setDecoded(result);
      setError("");
    } catch (err) {
      setDecoded(null);
      setError(err instanceof Error ? err.message : "Failed to decode JWT");
    }
  }, [token]);

  const headerJson = decoded ? JSON.stringify(decoded.header, null, 2) : "";
  const payloadJson = decoded ? JSON.stringify(decoded.payload, null, 2) : "";

  const expValue =
    decoded && typeof decoded.payload.exp === "number"
      ? decoded.payload.exp
      : null;

  return (
    <div className="space-y-6">
      <div>
        <label htmlFor="jwt-input" className="block text-sm font-medium mb-2">
          JWT Token
        </label>
        <textarea
          id="jwt-input"
          value={token}
          onChange={(e) => setToken(e.target.value)}
          placeholder="xxxxx.yyyyy.zzzzz"
          rows={4}
          className="w-full font-mono text-sm"
        />
      </div>

      {error && (
        <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl p-4 text-red-700 dark:text-red-400 text-sm">
          {error}
        </div>
      )}

      {decoded && (
        <div className="space-y-4">
          {/* Header */}
          <div className="bg-card border border-card-border rounded-xl p-4">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-sm font-semibold text-muted">{dict.common.header}</h3>
              <CopyButton text={headerJson} />
            </div>
            <pre className="font-mono text-sm whitespace-pre-wrap break-all bg-black/5 dark:bg-white/5 rounded-lg p-3">
              {headerJson}
            </pre>
          </div>

          {/* Payload */}
          <div className="bg-card border border-card-border rounded-xl p-4">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-sm font-semibold text-muted">{dict.common.payload}</h3>
              <CopyButton text={payloadJson} />
            </div>
            <pre className="font-mono text-sm whitespace-pre-wrap break-all bg-black/5 dark:bg-white/5 rounded-lg p-3">
              {payloadJson}
            </pre>

            {/* Standard Claims */}
            <div className="mt-4 space-y-2">
              {Object.entries(STANDARD_CLAIMS).map(([key, label]) => {
                const value = decoded.payload[key];
                if (value === undefined) return null;

                const isTimestamp = ["exp", "nbf", "iat"].includes(key);
                const displayValue =
                  isTimestamp && typeof value === "number"
                    ? formatTimestamp(value)
                    : String(value);

                return (
                  <div
                    key={key}
                    className="flex items-start gap-2 text-sm"
                  >
                    <span className="font-medium text-muted min-w-[100px]">
                      {label}
                    </span>
                    <span className="font-mono break-all">{displayValue}</span>
                    {key === "exp" && typeof value === "number" && (
                      <span
                        className={`ml-2 px-2 py-0.5 rounded text-xs font-medium ${
                          isExpired(value)
                            ? "bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400"
                            : "bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400"
                        }`}
                      >
                        {isExpired(value) ? dict.common.expired : dict.common.valid}
                      </span>
                    )}
                  </div>
                );
              })}
            </div>

            {expValue !== null && (
              <div className="mt-3 pt-3 border-t border-card-border">
                <p
                  className={`text-sm font-medium ${
                    isExpired(expValue)
                      ? "text-red-600 dark:text-red-400"
                      : "text-green-600 dark:text-green-400"
                  }`}
                >
                  {isExpired(expValue)
                    ? "This token has expired."
                    : "This token is still valid."}
                </p>
              </div>
            )}
          </div>

          {/* Signature */}
          <div className="bg-card border border-card-border rounded-xl p-4">
            <h3 className="text-sm font-semibold text-muted mb-3">
              {dict.common.signature}
            </h3>
            <p className="font-mono text-sm break-all bg-black/5 dark:bg-white/5 rounded-lg p-3">
              {decoded.signature}
            </p>
            <p className="text-xs text-muted mt-2">
              Signature is not verified. This tool only decodes the token.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
