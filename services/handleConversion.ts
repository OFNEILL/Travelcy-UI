export async function HandleConversion(amount: number, currency: string) {
  const url = `https://localhost:7297/conversion/HandleConversion?amount=${amount.toString()}&currency=${currency}`;
  console.log(url);
  const requestOptions: RequestInit = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };
  console.log(requestOptions);

  try {
    const response = await fetch(url, { cache: "no-cache" });
    console.log(response);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const responseData = await response.json();
    console.log(responseData);
    return responseData;
  } catch (error) {
    console.error("Error occurred:", error);
    throw error;
  }
}
