using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using System.Data;
using Npgsql;

namespace PivotController.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class PivotController : ControllerBase
    {
        [HttpGet(Name = "GetPostgreSQLResult")]
        public object Get()
        {
            return JsonConvert.SerializeObject(GetPostgreSQLResult());
        }

        public dynamic GetPostgreSQLResult()
        {
            NpgsqlConnection connection = new NpgsqlConnection("<Enter your valid connection string here>");
            connection.Open();
            NpgsqlCommand cmd = new NpgsqlCommand("SELECT * FROM apxtimestamp", connection);
            NpgsqlDataAdapter da = new NpgsqlDataAdapter(cmd);
            DataTable dt = new DataTable();
            da.Fill(dt);
            connection.Close();
            return dt;
        }
    }
}