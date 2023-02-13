const { deterministicPartitionKey } = require("./dpk");

describe("deterministicPartitionKey", () => {
  it("Returns the literal '0' when given no input", () => {
    const trivialKey = deterministicPartitionKey();
    expect(trivialKey).toBe("0");
  });

  it("Returns the hex string when empty event object is given", () => {
    const candidate = deterministicPartitionKey({});
    expect(candidate).toBe("c1802e6b9670927ebfddb7f67b3824642237361f07db35526c42c555ffd2dbe74156c366e1550ef8c0508a6cc796409a7194a59bba4d300a6182b483d315a862");
  });

  it("Returns the partitionKey when event object with partition key value pair is given and the length of partitionKey is less than MAX_PARTITION_KEY_LENGTH", () => {
    const event = { partitionKey: '123456' };
    const candidate = deterministicPartitionKey(event);
    expect(candidate).toMatch("123456");
  });
});
