const hostname = process.env.NEXT_PUBLIC_SERVER_HOSTNAME_URL;

async function putData(url: `/${string}`, id: string, data: any) {
  if (!hostname) return console.log("SERVER HOSTNAME_URL not found");

  try {
    const res = await fetch(`${hostname}${url}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    return res.json();
  } catch (error) {
    console.log(error);
  }
}

export async function updateBoard(id: string, data: any) {
  return putData("/v1/boards", id, data);
}

export async function updateColumn(id: string, data: any) {
  return putData("/v1/columns", id, data);
}

export async function updateCard(id: string, data: any) {
  return putData("/v1/cards", id, data);
}
