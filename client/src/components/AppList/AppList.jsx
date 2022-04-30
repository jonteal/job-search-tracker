import Application from "../Post/Post";
import "./Posts.css";

export default function AppList({ applications }) {
  return (
    <div className="apps">
      {posts.map((p) => (
        <Post post={p} />
      ))}
    </div>
  );
}
