export type DidkitRes = {
  checks: string;
  warnings: string[];
  errors: string[];
};

export const VerifyStatus = {
  success: "検証に成功しました。",
  verifying: "検証中...",
  failed: "検証に失敗しました。",
  waiting: "待機中",
} as const;

export type VerifyStatusType = (typeof VerifyStatus)[keyof typeof VerifyStatus];
