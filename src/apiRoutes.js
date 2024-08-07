const API_BASE_URL = process.env.REACT_APP_BASE_URL || 'http://localhost:5000/api';

const apiRoutes = {
  cardM1: `${API_BASE_URL}/cardM1`,
  cardM2: `${API_BASE_URL}/cardM2`,
  cardM3: `${API_BASE_URL}/cardM3`,
  cardM4: `${API_BASE_URL}/cardM4`,
  cardM5: `${API_BASE_URL}/cardM5`,
  cardM6: `${API_BASE_URL}/cardM6`,
  cardM7: `${API_BASE_URL}/cardM7`,
  cardM8: `${API_BASE_URL}/cardM8`,
  cardM9: `${API_BASE_URL}/cardM9`,
  cardM10: `${API_BASE_URL}/cardM10`,
  cardM11: `${API_BASE_URL}/cardM11`,
  cardM12: `${API_BASE_URL}/cardM12`,
  principalText: `${API_BASE_URL}/principalText`,


  updateCardM1: `${API_BASE_URL}/cardM1/update-card`,
  updateCardM2: `${API_BASE_URL}/cardM2/update-card`,
  updateCardM3: `${API_BASE_URL}/cardM3/update-card`,
  updateCardM4: `${API_BASE_URL}/cardM4/update-card`,
  updateCardM5: `${API_BASE_URL}/cardM5/update-card`,
  updateCardM6: `${API_BASE_URL}/cardM6/update-card`,
  updateCardM7: `${API_BASE_URL}/cardM7/update-card`,
  updateCardM8: `${API_BASE_URL}/cardM8/update-card`,
  updateCardM9: `${API_BASE_URL}/cardM9/update-card`,
  updateCardM10: `${API_BASE_URL}/cardM10/update-card`,
  updateCardM11: `${API_BASE_URL}/cardM11/update-card`,
  updateCardM12: `${API_BASE_URL}/cardM12/update-card`,

  principalTextCarrousel: `${API_BASE_URL}/principalText`,
  carousel: `${API_BASE_URL}/carousel`,
  updateCarousel: `${API_BASE_URL}/carousel/update-by-section-tag`, // Ruta para actualizar el carrusel

  imageSection: `${API_BASE_URL}/ImageSection`,
  imageSectionCards: `${API_BASE_URL}/ImageSectionCards`,
  updateCard: `${API_BASE_URL}/update-card`,

  imageSectionData: `${API_BASE_URL}/ImageSection`,
  imageSectionCardsData: `${API_BASE_URL}/ImageSectionCards`,
  updateCardData: `${API_BASE_URL}/update-card`,
  cardsEndData: `${API_BASE_URL}/cards-end`, // Renombrado

  m1: `${API_BASE_URL}/m1`, // Ajustado para que coincida con tu backend
  m1Cards: `${API_BASE_URL}/m1/cards`,
  m1UpdateByTag: `${API_BASE_URL}/m1/update-by-tag`,
  m1UpdateByTagCards: `${API_BASE_URL}/m1/update-by-tag-cards`,
};

export default apiRoutes;
