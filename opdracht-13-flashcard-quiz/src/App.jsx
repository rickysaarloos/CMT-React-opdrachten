import FlashCardList from "./components/FlashCardList";
import flashCards from "./data";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-200">
      <h1 className="text-4xl font-bold text-center pt-10 mb-8">
        Hoofdsteden Flashcard Quiz
      </h1>

      <FlashCardList cards={flashCards} />
    </div>
  );
}

export default App;
