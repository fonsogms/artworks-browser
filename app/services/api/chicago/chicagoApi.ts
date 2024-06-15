"use client";
import { URLS } from "@/app/constants/URLS";
import axios from "axios";

export const chicagoApi = axios.create({
  baseURL: URLS.API.CHICAGO_API.ROOT,
  timeout: 60000,
});
