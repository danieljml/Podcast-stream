export const getObject = (
  key: string,
  fallbackValue: any = {}
): any => {
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : fallbackValue;
};

export const setObject = (
  key: string,
  object: any,
  fallbackValue: any = {}
): void => {
  localStorage.setItem(key, JSON.stringify(object || fallbackValue));
};

export const getTable = (tableName: string): any =>
  getObject(tableName);

export const setTable = (tableName: string, snapshot: any): void =>
  setObject(tableName, snapshot);

export const findRecord = (
  tableName: string,
  callback: (record: any) => boolean
): any[] => {
  const table = getTable(tableName);
  return table.filter(callback);
};

export const getRecord = (tableName: string, identifier: string): any => {
  const table = getTable(tableName);
  return table[identifier];
};

export const setRecord = (
  tableName: string,
  identifier: string,
  data: any
): void => {
  const table = getTable(tableName);
  table[identifier] = data;
  setTable(tableName, table);
};

export const createRecord = (tableName: string, defaultData: any): string => {
  const identifier = crypto.randomUUID();
  setRecord(tableName, identifier, defaultData);
  return identifier;
};

export const deleteRecord = (tableName: string, identifier: string): void => {
  const table = getTable(tableName);
  const updatedTable = Object.fromEntries(
    Object.entries(table).filter((record) => record[0] !== identifier)
  );
  setTable(tableName, updatedTable);
};
