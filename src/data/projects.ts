export const loadProjectsByCategory = async (category: string) => {
  try {
    const data = await import(`./projects/${category}.json`);
    return data.default;
  } catch (error) {
    console.error(error);
  }
};
