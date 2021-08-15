using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace quiz.Controllers
{
    [Produces("application/json")]
    [Route("api/Questions")]
    public class QuestionsController : Controller
    {
        readonly QuizContext _context;
        public QuestionsController(QuizContext context)
        {
            _context = context;
        }
        [HttpGet]
        public IEnumerable<Models.Question> Get()
        {
            return _context.Questions;
        }
        [HttpGet("{quizId}")]
        public IEnumerable<Models.Question> Get([FromRoute] int quizId)
        {
            return _context.Questions.Where(q => q.QuizId == quizId);
        }
        [HttpPost]
        public async Task<IActionResult> Post([FromBody]Models.Question question)
        {
            var quizId = _context.Quiz.SingleOrDefault(q => q.ID == question.QuizId);
            if (quizId == null)
                return NotFound();
            _context.Questions.Add(question);
            await _context.SaveChangesAsync();
            return Ok(question);
        }
        [HttpPut("{id}")]
        public async Task<IActionResult> Put(int id, [FromBody] Models.Question question)
        {
            if (id != question.ID)
                return BadRequest();
            _context.Entry(question).State = EntityState.Modified;
            await _context.SaveChangesAsync();
            return Ok(question);
        }
    }
}
