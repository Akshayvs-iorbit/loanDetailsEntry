<div>
                  <FormControl sx={{ m: 2, minWidth: 400 }}>
                    <InputLabel id="simple-select-autowidth-label">
                      Bank Name
                    </InputLabel>
                    <Select
                      // labelId="simple-select-autowidth-label"
                      // id="simple-select-autowidth"
                      name="bankName"
                      onChange={(e) => handleChange(e)}
                      value={inputField.bankName}
                      label="Bank-Name"
                    >
                      <MenuItem
                        //name="bankName"
                        value={inputField.bankName}
                        onChange={(e) => handleChange(e)}
                      >
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value={"Bank One"}>Bank One</MenuItem>
                      <MenuItem value={"Bank Two"}>Bank Two</MenuItem>
                      <MenuItem value={"Bank Three"}>Bank Three</MenuItem>
                    </Select>
                  </FormControl>
                </div>
