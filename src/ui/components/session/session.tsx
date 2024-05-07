import { useAuth } from "@/context/auth-user-context";
import { GUEST, REGISTERED } from "@/lib/session status";
import { SessionStatusTypes } from "@/types/sessiosn-status-types";
import { ScreenSpinner } from "@/ui/design-syteme/spinner/screen-spinner";
import { useRouter } from "next/router";

interface Props {
  children: React.ReactNode;
  sessionStatus?: SessionStatusTypes;
}

export const Session = ({ children, sessionStatus }: Props) => {
  const router = useRouter();
  const { authUser, authUserIsLoading } = useAuth();

  const onbordingIsCompleted = authUser?.userDocument?.onbordingIsCompleted;

  const shouldRedirectToOnboarding = () => {
    return (
      !authUserIsLoading &&
      authUser &&
      !onbordingIsCompleted &&
      router.asPath !== "/onboarding"
    );
  };
  const shouldNotRedirectToOnboarding = () => {
    return (
      !authUserIsLoading &&
      authUser &&
      onbordingIsCompleted &&
      router.asPath !== "/onboarding"
    );
  };

  if (shouldRedirectToOnboarding()) {
    router.push("/onboarding");
    return <ScreenSpinner />;
  }
  if (shouldNotRedirectToOnboarding()) {
    router.push("/mon-espace");
    return <ScreenSpinner />;
  }

  if (sessionStatus === GUEST && !authUserIsLoading) {
    if (!authUser) {
      return <>{children}</>;
    } else {
      router.push("/mon-espace");
    }
  }
  if (sessionStatus === REGISTERED && !authUserIsLoading) {
    if (authUser) {
      return <>{children}</>;
    } else {
      router.push("/connexion");
    }
  }
  if (!sessionStatus && !authUserIsLoading) {
    return <>{children}</>;
  }

  return <ScreenSpinner />;
};
