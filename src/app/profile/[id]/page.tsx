export default function UserProfile({ params }: any) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h2>Profile</h2>
      <br />
      <h1 className="text-4xl">
        Profile Page{" "}
        <span className="p-2 rounded bg-orange-500">{params.id}</span>
      </h1>
    </div>
  );
}
