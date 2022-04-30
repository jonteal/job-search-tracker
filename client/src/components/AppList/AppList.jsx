import Application from "../Application/Application";

export default function AppList({ applications }) {
    return (
        <div className="apps">
        {applications.map((a) => (
            <Application application={a} />
        ))}
        </div>
    );
}
