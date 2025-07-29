import axios from "axios";
import { useCallback, useState } from "react";
import { User } from "../types/api/User";
import { useHistory } from "react-router-dom";

export const useAuth = () => {
  const history = useHistory();
  const [loading, SetLoading] = useState(false);
  const login = useCallback((id: string) => {
    SetLoading(true);
    axios
      .get<User>(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => {
        if (res.data) {
          history.push("/home");
        } else {
          alert("ユーザーが見つかりません");
        }
      })
      .catch(() => {
        alert("ログインできません");
      }).finally(()=>{
        SetLoading(false);
      });
  }, []);

  return {
    login,loading
  };
};
