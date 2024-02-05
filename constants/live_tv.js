module.exports = {
  SOURCE_TYPE: {
    LIVE: 'live',
    SERVER: 'server',
  },
  STREAMING_STATUS: {
    SCHEDULED: 0,
    LIVE: 1,
    PAST: 2,
    STOPPED: 0,
    PROCESSING: 3,
    ERROR: 4,
  },
  CHANNEL_STATUS: {
    LIVE: 1,
    STOPPED: 0,
  },
  JOB_PERIOD: 3, // minutes
  SERVER_TYPE_PROCESS_DURATION: 5, // minutes
  LIVE_TYPE_PROCESS_DURATION: 10, // minutes
  STATIC_CHANNEL_START_AHEAD: 10, // minutes
  DYNAMIC_CHANNEL_START_AHEAD: 10, // minutes
  REMIND_JOB_PERIOD: 10,
  ASK_ME_ANYTHING_BILLING_STATUS: {
    WAIT_TO_END_STREAM: 0,
    SUCCESS: 1,
    ERROR: 2,
    IN_PROGRESS: 3,
  },
  ASK_ME_ANYTHING_GLOBAL_STATUS: {
    WAIT_TO_END_STREAM: 0,
    IN_PROGRESS: 1,
    COMPLETED: 2,
  },
};
