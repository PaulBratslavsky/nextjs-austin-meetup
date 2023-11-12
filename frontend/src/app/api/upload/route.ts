import { cookies } from 'next/headers'

export async function POST(request: Request ) {
  const url = `${process.env.STRAPI_URL}/api/upload`;

  const cookieStore = cookies()
  const authToken = cookieStore.get('jwt')?.value;

  if (!authToken) return { error: "No JWT", ok: false };

  const formData = await request.formData()
  const file: File | null = formData.get('image') as unknown as File

  if (!file) return { error: "No file", ok: false };

  const newFormData = new FormData();
  newFormData.append('files', file, file.name);
  
  const response = await fetch(url, {
    method: "POST",
    headers: { Authorization: `Bearer ${authToken}`},
    body: newFormData,
  });

  const data = await response.json();
  return Response.json({ data: data[0], ok: true });
}
