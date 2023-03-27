using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using System.Data;
using Npgsql;

namespace MyWebService.Controllers
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

        private dynamic GetPostgreSQLResult()
        {
            NpgsqlConnection connection = new NpgsqlConnection("<Enter your valid connection string here>");
            connection.Open();
            NpgsqlCommand command = new NpgsqlCommand("SELECT * FROM apxtimestamp", connection);
            NpgsqlDataAdapter dataAdapter = new NpgsqlDataAdapter(command);
            DataTable dataTable = new DataTable();
            dataAdapter.Fill(dataTable);
            connection.Close();
            return dataTable;
        }
    }
}