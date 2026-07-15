type ResetPasswordEmailProps = {
  email?: string;
};

export function ResetPasswordEmail({ email }: ResetPasswordEmailProps) {
  return <>{email && <p className="mt-1 font-medium text-white">{email}</p>}</>;
}
