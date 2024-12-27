// import { useRouter } from "next/navigation";

const SocialShare = ({ title, summary,url }:{title: string, summary: string,url:string}) => {
//   const router = useRouter();
//   const url = `${process.env.NEXT_PUBLIC_BASE_URL}${router.asPath}`;

  const shareLinks = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
      url
    )}`,
    twitter: `https://twitter.com/share?url=${encodeURIComponent(
      url
    )}&text=${encodeURIComponent(title)}`,
    linkedin: `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(
      url
    )}&title=${encodeURIComponent(title)}&summary=${encodeURIComponent(
      summary
    )}`,
    whatsapp: `https://wa.me/?text=${encodeURIComponent(`${title} ${url}`)}`,
    email: `mailto:?subject=${encodeURIComponent(
      title
    )}&body=${encodeURIComponent(`${summary} ${url}`)}`,
  };

  return (
    <div className="social-share">
      <a href={shareLinks.facebook} target="_blank" rel="noopener noreferrer">
        Share on Facebook
      </a>
      <a href={shareLinks.twitter} target="_blank" rel="noopener noreferrer">
        Share on Twitter
      </a>
      <a href={shareLinks.linkedin} target="_blank" rel="noopener noreferrer">
        Share on LinkedIn
      </a>
      <a href={shareLinks.whatsapp} target="_blank" rel="noopener noreferrer">
        Share on WhatsApp
      </a>
      <a href={shareLinks.email}>Share via Email</a>
    </div>
  );
};

export default SocialShare;
