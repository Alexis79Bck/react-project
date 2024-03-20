
import TopBar from "../components/header/TopBar";

export default function Base() {
  return (
    <header>
      <TopBar
        className="w-full max-w-xl"
        email={"user@example.com"}
        phoneNumber={"0123-1234567"}
        facebookUrl={""}
        twitterUrl={""}
        instagramUrl={""}
        youtubeUrl={""}
      />
    </header>
  );
}
