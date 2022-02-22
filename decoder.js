function decodeUplink(input) {
  bytes = [129, 158, 18, 30, 28, 19, 20, 245, 176, 34, 172];
  //gZ4SHhwTFPWwIqw=
  //bytes = input.bytes
  frame_type = (bytes[0] >> 0) & ((1 << 4)-1);
  switch (frame_type) {
  case 0:
    frame_type_string = "Info Frame";
    break;
  case 1:
    frame_type_string = "Keep-Alive Frame";
    break;
  case 2:
    frame_type_string = "Daily update frame";
    break;
  case 3:
    frame_type_string = "Error frame";
    break;
  case 4:
    frame_type_string = "Start frame 1";
    break;
  case 5:
    frame_type_string = "Start frame 2";
    break;
  default:
    frame_type_string = "Reserved frame";
    break;
  }
  // From byte 0, get Battery state
  battery_state = (bytes[0] >> 6) & 0x1;
  parking_status_slot = (bytes[0] >> 7) & 0x1;
  return {
    data: {
      frame_type: frame_type,
      frame_type_string: frame_type_string,
      battery_state: battery_state,
      parking_status_slot: parking_status_slot,
      bytes_length: bytes.length
    },
    warnings: [],
    erros: []
  };
}
//gRwSAB79BQgg++o=
