//libs
const crypto = require("crypto");

//constants
const DPK_KEYS_DETAIL = require('./constants');

exports.deterministicPartitionKey = (event) => {
  const { TRIVIAL_PARTITION_KEY, MAX_PARTITION_KEY_LENGTH } = DPK_KEYS_DETAIL;
  let candidate = TRIVIAL_PARTITION_KEY;

  if (event) {
    const { partitionKey } = event;
    if (partitionKey) {
      candidate = JSON.stringify(partitionKey);
    } else {
      const data = JSON.stringify(event);
      candidate = getHexString(data);
      return candidate;
    }
  }

  if (candidate.length > MAX_PARTITION_KEY_LENGTH) {
    candidate = getHexString(candidate);
  }

  return candidate;
};

const getHexString = (data) => {
  return crypto.createHash("sha3-512").update(data).digest("hex");
};
