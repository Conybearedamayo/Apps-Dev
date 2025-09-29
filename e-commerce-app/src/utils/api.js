const BASE_URL = "https://dummyjson.com";

// ✅ Fetch products with pagination support
export const fetchProducts = async (limit = 10, skip = 0) => {
  try {
    const response = await fetch(`${BASE_URL}/products?limit=${limit}&skip=${skip}`);
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    
    const data = await response.json();
    return {
      products: data.products || [],
      total: data.total || 0,
    };
  } catch (error) {
    console.error("Error fetching products:", error);
    return { products: [], total: 0 };
  }
};

// ✅ Fetch single product
export const fetchProductById = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}/products/${id}`);
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    
    return await response.json();
  } catch (error) {
    console.error(`Error fetching product with ID ${id}:`, error);
    return null;
  }
};

// ✅ NEW: Search products using API
export const searchProducts = async (query) => {
  try {
    const response = await fetch(`${BASE_URL}/products/search?q=${encodeURIComponent(query)}`);
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    
    const data = await response.json();
    return data.products || [];
  } catch (error) {
    console.error("Error searching products:", error);
    return [];
  }
};

// ✅ NEW: Fetch by category (future use)
export const fetchProductsByCategory = async (category, limit = 10, skip = 0) => {
  try {
    const response = await fetch(`${BASE_URL}/products/category/${category}?limit=${limit}&skip=${skip}`);
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    
    const data = await response.json();
    return data.products || [];
  } catch (error) {
    console.error(`Error fetching category ${category}:`, error);
    return [];
  }
};
