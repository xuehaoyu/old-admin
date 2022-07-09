import { request } from '@umijs/max';
import { StorageEnum} from '@/common/enum'
import ENV from '@/env';

export async function loginUser(
    params: API.LoginParams,
    options?: { [key: string]: any },
) {
    return request<API.LoginResult>(`${ENV.liveservice}/user/login`, {
        method: 'POST',
        params: {
            ...params,
        },
        ...(options || {}),
    });
}

export async function getFakeCaptcha(
    params: {
        // query
        /** 手机号 */
        phone?: string;
    },
    options?: { [key: string]: any },
) {
    return request<API.FakeCaptcha>(`${ENV.liveservice}/user/login`, {
        method: 'GET',
        params: {
            ...params,
        },
        ...(options || {}),
    });
}

/** 获取当前的用户 GET /api/currentUser */
export async function getCurrentUser() {
    const loginInfo = localStorage.getItem(StorageEnum.LoginInfo)
    return loginInfo ? JSON.parse(loginInfo) : null;
}

/** Logs out current logged in user session GET /user/logout */
export async function logoutUser(options?: { [key: string]: any }) {
    localStorage.removeItem(StorageEnum.LoginInfo)
    return true;
}
