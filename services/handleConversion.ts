export async function HandleConversion(amount: number, currency: string) {
  const url = `https://travelcy.somee.com/travelcy-core/conversion/HandleConversion?amount=${amount}&currency=${currency}`;
  console.log("Request URL:", url);

  const requestOptions: RequestInit = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };

  try {
    const response = await fetch(url, requestOptions);
    console.log("Request options:", requestOptions);

    if (!response.ok) {
      throw new Error(`Network response was not ok: ${response.statusText}`);
    }

    // Ensure the response is JSON
    const contentType = response.headers.get("content-type");
    if (contentType && contentType.includes("application/json")) {
      const responseData = await response.json();
      return responseData;
    } else {
      throw new Error("Received response is not JSON");
    }
  } catch (error) {
    console.error("Error occurred:", error);
    throw error;
  }
}
