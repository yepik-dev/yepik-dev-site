"use client";

export default function Error({ error }: { error: Error }) {
  return (
    <div className="p-4">
      <p>{error.message || "Unknown Error"}</p>
    </div>
  );
}
