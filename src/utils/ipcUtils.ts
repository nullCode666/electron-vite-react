

export async function invokeIpcMethod<T>(channel: string, ...args: any[]): Promise<T> {
  try {
    return await window.ipcRenderer.invoke(channel, ...args);
  } catch (error) {
    console.error(`Error invoking IPC method ${channel}:`, error);
    throw error; // 你可以选择处理错误或重新抛出
  }
}