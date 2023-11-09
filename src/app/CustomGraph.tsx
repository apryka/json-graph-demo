'use client'

import { Graph } from 'jsoncrack-react'

export default function CustomGraph (data: Record<string,any>) {
  const json = JSON.stringify(data);
  return  <Graph json={json} />
}