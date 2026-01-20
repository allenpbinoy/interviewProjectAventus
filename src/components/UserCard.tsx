interface UserCardProps { name: string; email: string }
const UserCard: React.FC<UserCardProps> = ({ name, email }) => (
  <div className="p-4 border rounded">
    <h2 className="font-bold">{name}</h2>
    <p>{email}</p>
  </div>
);
export default UserCard;
