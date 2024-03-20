import "../../assets/css/fa-all.min.css";

export default function TopBar(props) {
  const {
    email,
    phoneNumber,
    facebookUrl,
    twitterUrl,
    instagramUrl,
    youtubeUrl,
  } = props;
  return (
    <div className="p-2 grid grid-cols-2 bg-blue-700 text-white ">
      <div className="ml-6 justify-start text-lg font-semibold">
        {email} / {phoneNumber}
      </div>
      <div className="mr-6 flex flex-row gap-2 justify-end text-lg font-semibold">
        <div>
          <a href={facebookUrl} target="_blank">
            <i className="fab fa-facebook" />
          </a>
        </div>

        <div>
          <a href={twitterUrl} target="_blank">
            <i className="fab fa-twitter" />
          </a>
        </div>
        <div>
          <a href={instagramUrl} target="_blank">
            <i className="fab fa-instagram" />
          </a>
        </div>
        <div>
          <a href={youtubeUrl} target="_blank">
            <i className="fab fa-youtube" />
          </a>
        </div>
      </div>
    </div>
  );
}
