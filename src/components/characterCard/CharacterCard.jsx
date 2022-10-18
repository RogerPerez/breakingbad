import { useRouter } from "next/router";
const CharacterCard = ({ character }) => {
  const router = useRouter();
  return (
    <div
      onClick={() => router.push(`/character/${character.char_id}`)}
      key={character.char_id}
      className="characterCard"
    >
      <img
        className="characterImage"
        src={character.img}
        alt={character.name}
      />

      <p className="name">{character.name}</p>
    </div>
  );
};

export default CharacterCard;
