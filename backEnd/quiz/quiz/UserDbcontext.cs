using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
namespace quiz
{
    public class UserDbcontext: IdentityDbContext<IdentityUser>
    {
        public UserDbcontext(DbContextOptions<UserDbcontext> options): base(options)
        {

        }
    }
}
