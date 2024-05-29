import { useEffect } from "react";

export const handleChange = (setFormData, formData) => (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  export const useUpdateEffect = (formData) => {
    useEffect(() => {
      console.log(formData);
    }, [formData]);
  };

  export const handleUpdateChange = (setIsChanged, setFormData, formData) => (e) => {
    setIsChanged(true);
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };