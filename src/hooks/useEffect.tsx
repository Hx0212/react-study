import { useEffect, useState } from "react";

interface UserData {
  name: string;
  email: string;
  username: string;
  phone: string;
  website: string;
}
const UseEffect = () => {
  const [userData, setUserData] = useState<UserData | null>(null);
  const [useId, setUseId] = useState<string>("1");
  const [loading, setLoading] = useState<boolean>(false);
  useEffect(() => {
    setLoading(true);
    fetch(`https://jsonplaceholder.typicode.com/users/${useId}`)
      .then((res) => res.json())
      .then((data) => {
        setUserData(data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, [useId]);

  return (
    <div>
      <input
        value={useId}
        onChange={(e) => setUseId(e.target.value)}
        type="text"
      />
      <div>
        {loading ? (
          <p>loading...</p>
        ) : (
          <div>
            <p>Name: {userData?.name}</p>
            <p>Email: {userData?.email}</p>
            <p>Username: {userData?.username}</p>
            <p>Phone: {userData?.phone}</p>
            <p>Website: {userData?.website}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default UseEffect;
