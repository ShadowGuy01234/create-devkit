from fastapi import APIRouter

from app.services.health_service import get_health_payload

router = APIRouter(tags=["health"])


@router.get("/health")
async def health_check():
    return get_health_payload()
