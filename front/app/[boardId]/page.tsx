import Loader from "components/atoms/Loader";
import Board from "components/BoardsContent/Board/Board";

export default async function BoardPage({
  params,
}: {
  params: { boardId: string };
}) {
  const boardId = params.boardId;

  return (
    <>
      {!boardId ? (
        <Loader
          loadingText="😞 Problem z załadowaniem tablicy, sprawdź czy dana tablica na pewno
         istnieje."
        />
      ) : (
        <Board boardId={boardId} />
      )}
    </>
  );
}