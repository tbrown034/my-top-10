import { signIn } from "@/auth.js";

export function SignIn() {
  return (
    <form
      action={async () => {
        "use server";
        await signIn("google", { redirectTo: "/" });
      }}
    >
      <button
        type="submit"
        className="px-6 py-2 text-lg font-medium text-teal-900 transition-transform bg-teal-100 rounded-lg shadow hover:bg-teal-200 hover:scale-105"
      >
        Sign In
      </button>
    </form>
  );
}
