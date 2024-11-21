import { signOut } from "@/auth.js";

export function SignOut() {
  return (
    <form
      action={async () => {
        "use server";
        await signOut();
      }}
    >
      <button
        type="submit"
        className="px-6 py-2 text-lg font-medium text-teal-900 transition-transform bg-teal-100 rounded-lg shadow hover:bg-teal-200 hover:scale-105"
      >
        Sign Out
      </button>
    </form>
  );
}
