using MarketDataApi.Services;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddControllers();
builder.Services.AddScoped<AlphaVantageService>();

// React setup
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowFrontend",
        policy =>
        {
            policy.WithOrigins(
                "http://localhost:3000",
                "https://localhost:3000"
            )
                .AllowAnyMethod()
                .AllowAnyHeader();
        });
});

var app = builder.Build();

app.UseRouting();

app.UseCors("AllowFrontend");

app.UseHttpsRedirection();

app.MapGet("/", () =>
{
    return Results.Redirect("http://localhost:3000");
});

app.MapControllers();

app.Run();
