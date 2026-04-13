import os

from dotenv import load_dotenv

load_dotenv()


class Settings:
    project_name = "{{PROJECT_NAME}}"
    port = int(os.getenv("PORT", "5000"))
    cors_origins = [
        origin.strip()
        for origin in os.getenv("CORS_ORIGINS", "http://localhost:5173").split(",")
        if origin.strip()
    ]


settings = Settings()
