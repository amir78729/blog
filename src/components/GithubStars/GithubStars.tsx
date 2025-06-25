"use client";

type Props = {
  repoUrl: string;
};

const GithubStars = ({ repoUrl }: Props) => {
  const [_, repoPath] = repoUrl.split("github.com/");

  return (
    <a
      href={repoUrl}
      target="_blank"
    >
      <img
        style={{
          height: "1.5rem",
          objectFit: "contain",
          objectPosition: "0",
          borderRadius: "0",
        }}
        alt={`github stars for ${repoUrl} repository`}
        src={`https://img.shields.io/github/stars/${repoPath}?style=flat-square&labelColor=000000&color=000000&label=⭐`}
      />
    </a>
  );
};

export default GithubStars;
