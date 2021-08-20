using Microsoft.EntityFrameworkCore;

namespace quiz
{
    public class QuizContext : DbContext
    {
        public QuizContext(DbContextOptions<QuizContext> options) : base(options) { }
        public DbSet<Models.Question> Questions { get; set; }
        public DbSet<quiz.Models.Quiz> Quiz { get; set; }
    }
}
