using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
namespace quiz
{
    public class UserDbcontext: IdentityDbContext<IdentityUser>
    {
        public UserDbcontext(DbContextOptions<UserDbcontext> options): base(options)
        {

        }
    }
}
