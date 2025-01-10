import { useEffect, useState } from "react";
import { toast } from "react-toastify";

import { fetchCategories } from "../services/api";

import notification from "../messages/toast-notification";

const useCategories = () => {
  const [categories, setCategories] = useState<string[]>([]);
  const [isLoadingStatus, setIsLoadingStatus] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoadingStatus(true);
        const data = await fetchCategories();
        setCategories(data);
      } catch (error) {
        console.error("Error:", error);
        toast.error(notification.GENERAL_ERROR);
      } finally {
        setIsLoadingStatus(false);
      }
    }
    fetchData();
  }, []);

  return { isLoadingStatus, categories };
};

export default useCategories;
