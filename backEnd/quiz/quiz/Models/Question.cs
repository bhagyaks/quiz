namespace quiz.Models
{
    public class Question
    {
        public int ID { get; set; }
        public string Text { get; set; }
        public string correctAnswer { get; set; }
        public string answer1 { get; set; }
        public string answer2 { get; set; }
        public string answer3 { get; set; }
        public int QuizId { get; set; }
    }
}
