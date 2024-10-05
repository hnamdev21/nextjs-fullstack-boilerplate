import { useGetSession } from "@/hooks/usecases/useGetSession";
import { redirect } from "@/i18n/routing";

export default function withAdminRole<T extends object>(WrappedComponent: React.FC<T>) {
  return async function (props: T) {
    const session = await useGetSession();

    if (session?.user?.role !== "ADMIN") {
      return redirect("/");
    }

    return <WrappedComponent {...props} />;
  };
}
