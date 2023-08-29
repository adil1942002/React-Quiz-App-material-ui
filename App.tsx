// import './App.css';
import Radios from "./components/quiz";
function App() {
  const data = [
    {
      question: "HTML Stands for ______________",
      options: ["HTMl", "HTML", "Hypertext Markup Language", "hTML"],
      correctAnswer: "Hypertext Markup Language",
    },
    {
      question: "CSS Stands for ______________",
      options: ["cSS", "Cascading Style Sheet", "CsS"], correctAnswer: "Cascading Style Sheet",
    },
    {
      question: "JS Stands for ______________",
      options: ["Js", "JS", "JavaScript", "jS"],
      correctAnswer: "JavaScript",
    },
    {
      question: "RAM Stands for ______________",
      options: ["rAM", "RAm", "Random Access Memory", "RaM"],
      correctAnswer: "Random Access Memory",
    },
    {
      question: "RAM Stands for ______________",
      options: ["rAM", "RAm", "Random Access Memory", "RaM"],
      correctAnswer: "Random Access Memory",
    },
    {
      question: "RAM Stands for ______________",
      options: ["rAM", "RAm", "Random Access Memory", "RaM"],
      correctAnswer: "Random Access Memory",
    },
    {
      question: "RAM Stands for ______________",
      options: ["rAM", "RAm", "Random Access Memory", "RaM"],
      correctAnswer: "Random Access Memory",
    },
  
  
  ];
  return (
    <div className="App">
      
      <Radios questions={data}/>
  
</div>
);

};
export default App;










