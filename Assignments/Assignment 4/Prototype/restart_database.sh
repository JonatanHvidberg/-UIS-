#!/bin/bash

psql -d diabetes -U postgres -f minSP.sql
psql -d diabetes -U postgres -f Data.sql
