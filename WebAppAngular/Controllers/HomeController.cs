using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Mvc;
using WebAppAngular.Models;

namespace WebAppAngular.Controllers
{
//    [Authorize]
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult Demo()
        {
            return View();
        }
    }
}
